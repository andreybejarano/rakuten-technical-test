import { createBrowserHistory } from 'history';

// Abstracts away the differences in various environments and provides
// a minimal API that lets you manage the history stack
const history = process.env.BROWSER && createBrowserHistory({ basename: process.env.BASE_NAME });

export default history;
