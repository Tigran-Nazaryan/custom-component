import Button from "./components/Button";
import MenuItem from "./components/DropDownMenu/MenuItem.jsx";
import DropDown from "./components/DropDownMenu/DropDown.jsx";
import Empty from "./components/Empty/Empty.jsx";
import Collapse from "./components/ColapsiblePanel/Collapse.jsx";
import Tabs from "./components/Tabs/Tabs.jsx";
import TabPanel from "./components/Tabs/TabPanel.jsx";
import Spin from "./components/Spin/Spin.jsx";
import Modal from "./components/Modal/Modal.jsx";
import notFoundData from "./assets/notFoundData.png";

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

                {/*TODO: default image for Empty*/}
                {/*TODO: default text, style*/}
                <Empty
                    description="Empty"
                    img={<img src={notFoundData} alt="Empty"/>}
                    style={{flexDirection: 'column', height: '200px'}}
                />

                <Collapse size={"large"} items={items} defaultActiveKeys={["1"]} />

                {/*TODO: add activeKey*/}
                {/*TODO: items as props*/}
                <Tabs>
                    {tabItems.map((item, index) => (
                        // TODO: do we need TabPanel?
                        <TabPanel key={index} label={item.label}>
                            {item.children}
                        </TabPanel>
                    ))}
                </Tabs>

                <Spin
                    size="large"
                />

                <Modal />
            </div>
        </>
    );
}

export default App;
