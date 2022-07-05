import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
//importing a function

platformBrowserDynamic().bootstrapModule(AppModule); // expects root module as arg, our app.module

/*
1. Create app module, specify imports, declarations, and bootstrap
2. Create components
3. create main.ts
    - contains platformBrowserDynamic()
    - .bootstrapModule(app module you created that is the starting point)
4. terminal 'ng serve' to run local
*/