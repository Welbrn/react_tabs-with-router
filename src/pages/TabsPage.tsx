import { Link, useParams } from 'react-router-dom';
import { tabs } from '../api/tabs';
import cn from 'classnames';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTabId = tabs.find(tab => tab.id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <>
              <li
                data-cy="Tab"
                className={cn({ 'is-active': tab.id === tabId })}
              >
                <Link to={`../${tab.id}`}>{tab.title}</Link>
              </li>
            </>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabId ? selectedTabId?.content : 'Please select a tab'}
      </div>
    </div>
  );
};
