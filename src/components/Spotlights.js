import React from 'react';
import _ from 'lodash';

import {safePrefix, htmlToReact, markdownify} from '../utils';

export default class Spotlights extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class={'wrapper alt ' + _.get(this.props, 'section.background_style')}>
                {_.map(_.get(this.props, 'section.spotlights'), (spotlight, spotlight_idx) => (
                    <section key={spotlight_idx} class="spotlight">
                        {_.get(spotlight, 'home_img_path') && 
                            <div class="image"><img src={safePrefix(_.get(spotlight, 'home_img_path'))} alt="" /></div>
                        }
                        <div class="content">
                            <h2>{htmlToReact(_.get(spotlight, 'title').replace(/\n/g, '<br />'))}</h2>
                            {markdownify(_.get(spotlight, 'text'))}
                        </div>
                    </section>
                ))}
            </section>
        );
    }
}
