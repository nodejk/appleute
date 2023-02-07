declare namespace NodeJS {
    export interface ProcessEnv {
        PORT: string;
        HOST_NAME: string;
        API_ROUTE: string;
    }
}

interface ApiConfig {
    PORT: string;
    HOST_NAME: string;
    API_ROUTE: string;
}

class EnvironmentProvider {
    private static instance: EnvironmentProvider | null = null;
    private nodeEnvironment: NodeJS.ProcessEnv;

    private constructor() {
        this.nodeEnvironment = process.env;
    }

    public static get getEnvironmentConfig(): EnvironmentProvider {
        if (!EnvironmentProvider.instance) {
            EnvironmentProvider.instance = new EnvironmentProvider();
        }

        return EnvironmentProvider.instance;
    }

    public get appConfig(): ApiConfig {
        return {
            PORT: this.nodeEnvironment.PORT,
            HOST_NAME: this.nodeEnvironment.HOST_NAME,
            API_ROUTE: this.nodeEnvironment.API_ROUTE,
        }
    }
}

export default EnvironmentProvider;
