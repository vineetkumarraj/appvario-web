import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify} from '../utils';

export default class Icons extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class={'wrapper ' + _.get(this.props, 'section.background_style') + ' special'}>
                <div class="inner">
                    <header class="major">
                        <h2>{htmlToReact(_.get(this.props, 'section.title').replace(/\n/g, '<br />'))}</h2>
                        {markdownify(_.get(this.props, 'section.subtitle'))}
                    </header>
                    {_.get(this.props, 'section.feature_icons') && 
                        <ul class="icons major">
                            {_.map(_.get(this.props, 'section.feature_icons'), (item, item_idx) => (
                                <li key={item_idx}><span class={'icon ' + _.get(item, 'icon') + ' major ' + _.get(item, 'style')}><span class="label">{_.get(item, 'title')}</span></span></li>
                            ))}
                        </ul>
                    }
                </div>
            </section>
        );
    }
}
