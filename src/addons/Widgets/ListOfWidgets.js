import AnalogClock from './clock/AnalogClock';
import DigitalClock from './clock/DigitalClock';
import ClockMenu from './clock/menu';
import TextBox from './TextBox';
import TextBoxMenu from './TextBox/menu';
import StickyNotes from './StickyNotes';
import StickyNodesMenu from './StickyNotes/menu';
import Calendar from './Calendar';
import CalendarMenu from './Calendar/menu';

const list = [
  {
    DisplayName: 'Analog Clock',
    WidgetName: 'AnalogClock',
    Component: AnalogClock,
    MenuComponent: ClockMenu,
  },
  {
    DisplayName: 'Digital Clock',
    WidgetName: 'DigitalClock',
    Component: DigitalClock,
    MenuComponent: ClockMenu,
  },
  {
    DisplayName: 'Text Box',
    WidgetName: 'TextBox',
    Component: TextBox,
    MenuComponent: TextBoxMenu,
  },
  {
    DisplayName: 'Sticky Notes',
    WidgetName: 'StickyNotes',
    Component: StickyNotes,
    MenuComponent: StickyNodesMenu,
  },
  {
    DisplayName: 'Calendar',
    WidgetName: 'Calendar',
    Component: Calendar,
    MenuComponent: CalendarMenu,
  },
];

export default list;
