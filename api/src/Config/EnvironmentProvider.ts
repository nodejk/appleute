interface ApiConfig {
    PORT: number;
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

    public static get appConfig(): ApiConfig {
        return {
            PORT: 8080,
            HOST_NAME: 'app',
            API_ROUTE: 'api',
        }
    }
}

export default EnvironmentProvider;
