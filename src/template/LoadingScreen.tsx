import * as React from 'react';
import { ILoadingScreenProps } from '../interface';


class LoadingScreen extends React.Component<ILoadingScreenProps,  {notFound: boolean; loading: boolean; }, {}> {
    constructor(props: ILoadingScreenProps) {
        super(props);

        this.state = {
            loading: true,
            notFound: false,
        };

        if (props.match.path) {
          setTimeout(() => {
              this.lookupUrl(props.match.path);
          }, 3000);
        }
    }

    lookupUrl(url: string) {
        fetch(this.props.pageLookupServicelUrl, { 'method': 'post', body: `{ url: ${url} }` }).then((response) => {
            if (200 === response.status) {
                this.setState({loading: false });
                this.props.addRoute({
                    ...response.json
                });
            }
            else {
                this.setState({ loading: false, notFound: true });
            }
        })
    }

    render() {
        if (this.state.notFound) {
            return (
              <main>
                <h1>Error: Page not found</h1>

                <p>404 page not found</p>
              </main>
            );
        }
        return (
            <span>Loading...</span>
        );
    }
}
