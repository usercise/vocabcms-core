import * as React from 'react';
import { IMap, ISlot } from './interface';
import { pluginManager } from './index';

export interface IScreenProps {
  slots: IMap<ISlot>;
  template: string;
  className?: string;
  [key: string]: any;
}

class Screen extends React.Component<IScreenProps, {slots: IMap<ISlot>;}> {
    constructor(props: IScreenProps) {
        super(props);
        this.state = {
            slots: props.slots || {},
        }
    }

    updateSlot(slot: ISlot, id: string) {
        this.setState((prevState) => {
            const newSlots: any = {...prevState.slots};
            newSlots[id] = slot;
            return {slots: newSlots};
        });
    }

    render() {
        const template = pluginManager.templateRegistry.get(this.props.template);
        return React.createElement(
          template,
          {...this.props, "updateSlot": this.updateSlot.bind(this), "slots": this.state.slots}
        );
    }

}

export default Screen;
