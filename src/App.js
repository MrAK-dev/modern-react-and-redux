import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: 'lf2s',
      label: 'Can i Use React on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: 'lf2sfqwe',
      label: 'Can i Use JavaScript on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: 'lf2sxfqs',
      label: 'Can i Use CSS on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
  ];

  return <Accordion items={items} />;
}

export default App;
