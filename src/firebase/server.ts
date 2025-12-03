// Server (Admin) SDK setup - only for server-side code
let adminApp: any = null;
export const app = () => {
    if (!adminApp) {
        // This part would typically be in a server-only file.
        // It's simplified here for demonstration.
        // In a real app, you'd use firebase-admin.
         const { initializeApp: initializeAdminApp, getApps: getAdminApps } = require('firebase-admin/app');
        if (!getAdminApps().length) {
           initializeAdminApp();
        }
        adminApp = getAdminApps()[0];
    }
    return adminApp;
}
