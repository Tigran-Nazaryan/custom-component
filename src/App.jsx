import Button from "./components/Button/Button.jsx";
import MenuItem from "./components/DropDownMenu/MenuItem.jsx";
import DropDown from "./components/DropDownMenu/DropDown.jsx";
import Empty from "./components/Empty/Empty.jsx";
import Collapse from "./components/ColapsiblePanel/Collapse.jsx";
import Tabs from "./components/Modal/Tabs.jsx";
import TabPanel from "./components/Modal/TabPanel.jsx";

function App() {

    const options = ["Red", "Blue", "Green"];
    const text = "Lorem ipsum dolor sit amet.";
    const items = [
        {
            key: "1",
            label: "This is panel header 1",
            children: <p>{text}</p>,
        },
        {
            key: "2",
            label: "This is panel header 2",
            children: <p>{text}</p>,
        },
        {
            key: "3",
            label: "This is panel header 3",
            children: <p>{text}</p>,
        },
    ];
    const tabItems = [
        {
            key: '1',
            label: 'Tab 1',
            children: 'Content of Tab Pane 1',
        },
        {
            key: '2',
            label: 'Tab 2',
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Tab 3',
            children: 'Content of Tab Pane 3',
        },
    ];

    return (
        <>
            <div className={'flex flex-col items-center justify-center gap-4 h-screen'}>
                <Button type={"primary"} size="large" onClick={() => alert('click')}>test</Button>
                <DropDown direction="bottom" trigger="click">
                    {options.map((option) => (
                        <MenuItem key={option}>{option}</MenuItem>
                    ))}
                </DropDown>
                <Empty
                    description="Empty"
                    img={<img src="empty.svg" alt="Empty"/>}
                    style={{flexDirection: 'column', height: '200px'}}
                >
                </Empty>
                <Collapse size={"medium"} items={items} defaultActiveKeys={["1"]}/>
                <Tabs>
                    {tabItems.map((item, index) => (
                        <TabPanel key={index} label={item.label}>
                            {item.children}
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </>
    );
}
export default App;
