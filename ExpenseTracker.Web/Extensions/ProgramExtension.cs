using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using ExpenseTracker.Service.Core;

namespace ExpenseTracker.Web.Extensions
{
    public static class ProgramExtension
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            return services;
        }

        public static IServiceCollection LoadServices(this IServiceCollection services)
        {
            foreach (var type in AppDomain.CurrentDomain.GetAssemblies().SelectMany
            (f => f.GetTypes())
            .Where(e => e.GetCustomAttribute<ServiceAttribute>(false) != null))
            {
                var serviceAttribute = type.GetCustomAttribute<ServiceAttribute>(false);
                var actorTypes = serviceAttribute.RegisterAs;
                if (serviceAttribute is SingeltonServiceAttribute)
                {
                    services.AddSingleton(type);
                    foreach (var actorType in actorTypes)
                    {
                        services.AddSingleton(actorType, (sCol) => sCol.GetService(type));
                    }
                }
                else
                {
                    services.AddScoped(type);
                    foreach (var actorType in actorTypes)
                    {
                        services.AddScoped(actorType, (sCol) => sCol.GetService(type));
                    }
                }
            }
            return services;
        }
    }

}