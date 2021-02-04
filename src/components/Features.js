import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify} from '../utils';

export default class Features extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class={'wrapper ' + _.get(this.props, 'section.background_style') + ' special'}>
                <div class="inner">
                    <header class="major">
                        <h2>{htmlToReact(_.get(this.props, 'section.title').replace(/\n/g, '<br />'))}</h2>
                        {markdownify(_.get(this.props, 'section.subtitle'))}
                    </header>
                    <ul class="features">
                        {_.map(_.get(this.props, 'section.features'), (feature, feature_idx) => (
                            <li key={feature_idx} class={'icon ' + _.get(feature, 'icon')}>
                                <h3>{_.get(feature, 'title')}</h3>
                                {markdownify(_.get(feature, 'text'))}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        );
    }
}
