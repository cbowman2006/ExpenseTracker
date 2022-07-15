using ExpenseTracker.Data;
using ExpenseTracker.Service.Core;
using ExpenseTracker.Service.Interface;
using Microsoft.EntityFrameworkCore;



var builder = WebApplication.CreateBuilder(args);



//Connect to DB
var connectionString = builder.Configuration["NgpConnectionSetting"];
builder.Services.AddDbContext<ExpenseTrackerDbContext>(options =>
    options.UseNpgsql(connectionString));
// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddScoped<ICategoryService, CategoryService>();
builder.Services.AddCors(o => o.AddPolicy("default", builder =>
{
    builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
}));




var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors("default");

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");
    

app.MapFallbackToFile("index.html");;

app.Run();
