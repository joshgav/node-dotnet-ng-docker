using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.AspNetCore;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;

namespace app {
    public class Startup {
        public Startup(IHostingEnvironment env) {

            var aiKey = Environment.GetEnvironmentVariable("APPINSIGHTS_INSTRUMENTATIONKEY");
            var devMode = Environment.GetEnvironmentVariable("APPINSIGHTS_DEVELOPER_MODE");
            var useDevMode = env.IsDevelopment() || !String.IsNullOrEmpty(devMode);

            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables()
                .AddApplicationInsightsSettings(
                    instrumentationKey: aiKey,
                    developerMode:  useDevMode ? (bool?)true : null);
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services) {
            services.AddApplicationInsightsTelemetry(this.Configuration);
            // services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory) {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            Random rnd = new Random();

            app.ApplicationServices.GetService<TelemetryClient>().Context.Properties["Service name"] = "service-dotnet";

            app.Run(async context => {
                if (rnd.Next(100) < 5) { throw new Exception("Today is unlucky for you!"); }
                await context.Response.WriteAsync("Hello from service B running on " + Environment.MachineName);
            });
        }
    }
}
