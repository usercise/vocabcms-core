
export interface Map<T> {
    [key: string]: T;
}

export interface Route {
    path: string;
    template: string;
    props: {
        meta?: any;
        title?: string;
        slots: Map<Slot>;
    }
}

export interface Slot {
    id: string;
    global: boolean;
    components: Array<Component>
}

export interface Component {
    id: string;
    component: string;
    props: Map<any>;
}

export interface VocabCMSState { routes: Array<Route>; }

export interface VocabCMSProps { 
    readonly initialState?: { 
        routes: Array<Route>;
    };
}
