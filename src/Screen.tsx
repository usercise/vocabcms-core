import * as React from 'react';
import { ISlot } from './interface';

export interface IScreenProps {
  slots: Array<ISlot>;
  template: string;
  className?: string;
}

class Screen extends React.Component<IScreenProps, {slots: Array<ISlot>;}> {
    constructor(props: IScreenProps) {
        super(props);
        this.state = {
            slots: props.slots,
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
        const template = this.props.template;
        return React.createElement(
          template,
          {...this.props, "updateSlot": this.updateSlot.bind(this), "slots": this.state.slots}
        );
    }

}

export default Screen;
