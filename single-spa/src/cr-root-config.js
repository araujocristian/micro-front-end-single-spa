import { registerApplication, start } from "single-spa";

fetch("https://run.mocky.io/v3/74b1f753-6251-4916-82d2-572760581c44")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(
      data.applications.forEach((app) => {
        registerApplication({
          name: app.name,
          app: () => System.import(app.package),
          activeWhen: app.exact
            ? (location) => location.pathname === app.activeWhen
            : [app.activeWhen],
        });
      })
    );
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    });
  });
