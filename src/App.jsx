import CustomButton from "./components/Button/Button.jsx";
import MenuItem from "./components/DropDownMenu/MenuItem.jsx";
import DropDown from "./components/DropDownMenu/DropDown.jsx";
import Empty from "./components/Empty/Empty.jsx";
import Collapse from "./components/ColapsiblePanel/Collapse.jsx";

function App() {
  // const options = ["Red", "Blue", "Green"];
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

  return (
    <>
      {/*<Button type={"primary"} size="large" onClick={() => alert('click')}>\test</Button>*/}

      {/*<DropDown direction="bottom" trigger="click">*/}
      {/*    {options.map((option) => (*/}
      {/*        <MenuItem key={option}>{option}</MenuItem>*/}
      {/*    ))}*/}
      {/*</DropDown>*/}

      {/*<Empty*/}
      {/*    description="Empty"*/}
      {/*    img={<img src="empty.svg" alt="Empty" />}*/}
      {/*    style={{ flexDirection: 'column', height: '200px' }}*/}
      {/*>*/}
      {/*</Empty>*/}
      <Collapse size={"medium"} items={items} defaultActiveKeys={["1"]} />
    </>
  );
}

export default App;
