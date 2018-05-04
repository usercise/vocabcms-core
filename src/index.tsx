import * as React from "react";
import { VocabCMSProps, VocabCMSState, Route } from "./interface";

export default class VocabCMS extends React.Component<VocabCMSProps, VocabCMSState> {
    constructor(props: VocabCMSProps) {
        super(props);
        const emptyRoute: Array<Route> = [];
        this.state = {
            routes: props.initialState.routes || emptyRoute,
        }
    }
}