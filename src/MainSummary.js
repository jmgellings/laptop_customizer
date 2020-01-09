import React, { Component } from 'react';
import Total from './Total';
import SummaryOption from './SummaryOption.js';

export default class MainSummary extends Component {
    render() {
        const {USCurrencyFormat} = this.props
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];

            return (
                <SummaryOption
                    featureHash={featureHash}
                    feature={feature}
                    selectedOption={selectedOption}
                    USCurrencyFormat={USCurrencyFormat}
                />
            );
          });
      
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );

        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Total USCurrencyFormat={USCurrencyFormat} total={total} />
            </section>
        )
    }
}