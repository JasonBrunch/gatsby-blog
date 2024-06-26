import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';

const StylePage = () => {
    const [styles, setStyles] = useState({});
    const containerStyle = {
        padding: '140px 20px 20px 5%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    };

    useEffect(() => {
        const elements = document.querySelectorAll('.style-container h1, .style-container h2, .style-container h3, .style-container h4, .style-container h5, .style-container h6, .style-container p, .style-container .smaller-text, .style-container .smallest-text');

        const elementStyles = {};
        elements.forEach(element => {
            const computedStyles = getComputedStyle(element);
            const tag = element.tagName.toLowerCase();
            const className = element.className ? `.${element.className}` : '';
            const key = `${tag}${className}`;

            elementStyles[key] = {
                fontSize: computedStyles.fontSize,
                fontWeight: computedStyles.fontWeight,
                color: computedStyles.color,
            };
        });

        setStyles(elementStyles);
    }, []);

    

    return (
        <Layout>
            <div className="style-container" style={containerStyle}>
                <h1>h1 Heading. {styles['h1'] && `${styles['h1'].fontSize}, ${styles['h1'].fontWeight}, ${styles['h1'].color}`}</h1>
                <h2>h2 Heading. {styles['h2'] && `${styles['h2'].fontSize}, ${styles['h2'].fontWeight}, Color: ${styles['h2'].color}`}</h2>
                <h3>h3 Heading. {styles['h3'] && `Font size: ${styles['h3'].fontSize}, Weight: ${styles['h3'].fontWeight}, Color: ${styles['h3'].color}`}</h3>
                <h4>h4 Heading. {styles['h4'] && `Font size: ${styles['h4'].fontSize}, Weight: ${styles['h4'].fontWeight}, Color: ${styles['h4'].color}`}</h4>
                <h5>h5 Heading. {styles['h5'] && `Font size: ${styles['h5'].fontSize}, Weight: ${styles['h5'].fontWeight}, Color: ${styles['h5'].color}`}</h5>
                <h6>h6 Heading. {styles['h6'] && `Font size: ${styles['h6'].fontSize}, Weight: ${styles['h6'].fontWeight}, Color: ${styles['h6'].color}`}</h6>
                <p>p. Lorem ipsum dolor sit amet, consectetur adipiscing elit. {styles['p'] && `Font size: ${styles['p'].fontSize}, Weight: ${styles['p'].fontWeight}, Color: ${styles['p'].color}`}</p>
                <p className='smaller-text'>smaller-text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. {styles['p.smaller-text'] && `Font size: ${styles['p.smaller-text'].fontSize}, Weight: ${styles['p.smaller-text'].fontWeight}, Color: ${styles['p.smaller-text'].color}`}</p>
                <p className='smallest-text'>smallest-text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. {styles['p.smallest-text'] && `Font size: ${styles['p.smallest-text'].fontSize}, Weight: ${styles['p.smallest-text'].fontWeight}, Color: ${styles['p.smallest-text'].color}`}</p>
            </div>
        </Layout>
    );
};

export default StylePage;