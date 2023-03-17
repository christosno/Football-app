import React from "react";
import { Button, Navbar, Dropdown, Indicator, Badge } from "react-daisyui";
import { Link } from "react-router-dom";

const Header = ({ toggleSearchModal }) => {
  return (
    <div className="bg-base-100 shadow-xl rounded-box pb-4 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans fixed top-0 left-0">
      <Navbar>
        <Navbar.Start>
          <Dropdown>
            <Button color="ghost" shape="circle" tabIndex={0}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </Button>
            <Dropdown.Menu tabIndex={0} className="menu-compact w-52">
              <Dropdown.Item>
                <Link to="/live-matches">Live Matches</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/leagues">Leagues</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Start>
        <Navbar.Center>
          <Link to="/">
            <Button color="ghost" className="normal-case text-xl">
              Football App
            </Button>
          </Link>
        </Navbar.Center>
        <Navbar.End className="navbar-end">
          <Button
            onClick={() => {
              console.log("Search icon clicked");
              toggleSearchModal();
            }}
            color="ghost"
            shape="circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Button>
          <Button color="ghost" shape="circle">
            <Indicator item={<Badge size="xs" color="primary" />}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </Indicator>
          </Button>
          <Link to="/auth?mode=login">
            <Button shape="circle" children="Login" />
          </Link>
          {/* <Dropdown vertical="end">
            <Button color="ghost" className="avatar" shape="circle">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </Button>
            <Dropdown.Menu className="w-52 menu-compact">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </Navbar.End>
      </Navbar>
    </div>
  );
};

export default Header;
