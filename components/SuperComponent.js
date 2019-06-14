import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class SuperComponent extends React.Component {

    constructor() {
        super();

        this.someVariable = 'Just something';
    }

    alertName(title) {
        alert(title);
    }
    render() {
        return(
            <BaseLayout>
            <div>I am Blogs page</div>
            </BaseLayout>
        )
    }
}

export default SuperComponent;