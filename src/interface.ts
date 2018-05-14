import { ReactNode } from 'react';
import { match } from 'react-router';


export interface IMap<T> {
    [key: string]: T;
}

export interface IRoute {
    path: string;
    template: string;
    exact?: boolean;
    props: {
        meta?: any;
        title?: string;
        slots: IMap<ISlot>;
    }
}

export interface ISlot {
    id: string;
    global: boolean;
    components: Array<IComponent>
}

export interface IComponent {
    id: string;
    component: string;
    props: IMap<any>;
}

export interface IVocabCMSState { routes: Array<IRoute>; }

export interface IVocabCMSProps {
    readonly children?: ReactNode;
    readonly initialState?: {
        routes: Array<IRoute>;
    };
}

export interface ILoadingScreenProps {
    readonly children?: ReactNode;
    readonly pageLookupServicelUrl: string;
    readonly match: match<object>;
    readonly addRoute: any;
}
