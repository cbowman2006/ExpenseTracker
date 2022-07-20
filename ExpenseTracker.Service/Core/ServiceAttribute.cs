using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExpenseTracker.Service.Core
{
    [AttributeUsage(AttributeTargets.Class, Inherited = true, AllowMultiple = true)]
    public class ServiceAttribute:Attribute
    {
        public ServiceAttribute(params Type[] registerAs)
        {
            RegisterAs = registerAs;   
        }

        public IEnumerable<Type> RegisterAs {get;set;}
    }

    [AttributeUsage(AttributeTargets.Class, Inherited = true, AllowMultiple = true)]
    public class SingeltonServiceAttribute: ServiceAttribute
    {
        public SingeltonServiceAttribute(params Type[] registerAs) : base(registerAs)
        {
            
        }
    }
}