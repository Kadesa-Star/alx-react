import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            // Ensure displayName is properly assigned, fallback to 'Component' if not available
            this.displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
        }

        componentDidMount() {
            // Log component mount
            console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name || 'Component'} is mounted`);
        }

        componentWillUnmount() {
            // Log component unmount
            console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name || 'Component'} is going to unmount`);
        }
        
        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
}

export default WithLogging;
