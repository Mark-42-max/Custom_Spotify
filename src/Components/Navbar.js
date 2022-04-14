import {
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
} from "reactstrap";
import './styles.scss';

const Navbar = () => {
  return (
    // <div>
    //   <Nav pills>
    //     <NavItem>
    //       <NavLink active href="#">
    //         Link
    //       </NavLink>
    //     </NavItem>

    //     <UncontrolledDropdown inNavbar nav>
    //       <DropdownToggle caret nav>
    //         Dropdown
    //       </DropdownToggle>
    //       <DropdownMenu end>
    //         <DropdownItem>Header</DropdownItem>
    //         <DropdownItem>Action</DropdownItem>
    //         <DropdownItem divider />
    //         <DropdownItem>Another Action</DropdownItem>
    //       </DropdownMenu>
    //     </UncontrolledDropdown>

    //     <NavItem>
    //       <NavLink href="#">Link</NavLink>
    //     </NavItem>
    //     <NavItem>
    //       <NavLink href="#">Another Link</NavLink>
    //     </NavItem>
    //     <NavItem>
    //       <NavLink disabled href="#">
    //         Disabled Link
    //       </NavLink>
    //     </NavItem>
    //   </Nav>
    // </div>

    <div>
      {/* <p>List Based</p> */}
      <Nav vertical className="colorr">
        <NavItem>
          <NavLink className="colorr2" href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
     
    </div>
  );
};

export default Navbar;
