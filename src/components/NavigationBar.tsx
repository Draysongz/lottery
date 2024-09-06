
import React from "react";
import { Link, useLocation } from "react-router-dom";


interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  to: string;  // Add a "to" prop for routing
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive = false, to }) => (
 <Link to={to}>
    <div
      className={`flex flex-col items-center ${
        isActive ? "text-white" : "text-white opacity-50"
      }`}
    >
      {icon}
      <span className="mt-1 text-xs">{label}</span>
    </div>
  </Link>
);

const NavigationBar: React.FC = () => {
   const location = useLocation();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black px-6  h-[70px] z-10 flex flex-col justify-center">
      <div className="flex justify-between items-center">
        <NavItem
          icon={
            <svg className="w-6 h-6" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="a"/><g id="b"/><g id="c" /><g id="d"/><g id="e"/><g id="f"/><g id="g"/><g id="h"/><g id="i"/><g id="j"/><g id="k"/><g id="l"/><g id="m"/><g id="n"/><g id="o"/><g id="p"/><g id="q"/><g id="r"/><g id="s"/><g id="t"/><g id="u"/><g id="v"/><g id="w"/><g id="x"/><g id="y"/><g id="a`"/><g id="aa"/><g id="ab"/><g id="ac"/><g id="ad"/><g id="ae"/><g id="af"/><g id="ag"/><g id="ah"/><g id="ai"/><g id="aj"/><g id="ak"/><g id="al"/><g id="am"/><g id="an"/><g id="ao"/><g id="ap"><path d="M44.31,18.67H12.28c-.55,0-1,.45-1,1v19.65c0,.55,.45,1,1,1H44.31c.55,0,1-.45,1-1V19.67c0-.55-.45-1-1-1Zm-31.04,2h8.68v17.65H13.28V20.67Zm10.68,17.65V20.67h8.68v17.65h-8.68Zm19.36,0h-8.68V20.67h8.68v17.65Z" fill="currentColor"/><path d="M20.19,26.29c-.15-.38-.52-.62-.93-.62h-3.98c-.55,0-1,.45-1,1s.45,1,1,1h1.91c-.75,1.15-1.54,2.79-1.54,4.64,0,.55,.45,1,1,1s1-.45,1-1c0-2.63,2.28-4.9,2.3-4.92,.29-.28,.38-.72,.23-1.09Z" fill="currentColor"/><path d="M30.29,25.67h-3.98c-.55,0-1,.45-1,1s.45,1,1,1h1.91c-.75,1.15-1.54,2.79-1.54,4.64,0,.55,.45,1,1,1s1-.45,1-1c0-2.63,2.28-4.9,2.3-4.92,.29-.28,.38-.72,.23-1.09-.15-.38-.52-.62-.93-.62Z" fill="currentColor"/><path d="M37.33,27.67h1.91c-.75,1.15-1.54,2.79-1.54,4.64,0,.55,.45,1,1,1s1-.45,1-1c0-2.63,2.28-4.9,2.3-4.92,.29-.28,.38-.72,.23-1.09-.15-.38-.52-.62-.93-.62h-3.98c-.55,0-1,.45-1,1s.45,1,1,1Z" fill="currentColor"/><path d="M60,11.33c0-2.59-2.11-4.7-4.7-4.7s-4.7,2.11-4.7,4.7c0,2.24,1.61,4.03,3.7,4.51v9.14h-1.7v-3.21c0-1.9-1.55-3.45-3.45-3.45h-.64c-.1-1.81-1.57-3.27-3.41-3.27H11.5c-1.84,0-3.31,1.46-3.41,3.27h-.64c-1.9,0-3.45,1.55-3.45,3.45v15.44c0,1.9,1.55,3.45,3.45,3.45h.64c.09,1.71,1.42,3.05,3.11,3.21v9.66c0,2.12,1.72,3.84,3.84,3.84h26.52c2.12,0,3.84-1.72,3.84-3.84v-9.66c1.69-.16,3.02-1.5,3.11-3.21h.64c1.9,0,3.45-1.55,3.45-3.45v-3.21h4.44c1.63,0,2.96-1.33,2.96-2.97v-3.08c0-1.64-1.33-2.97-2.96-2.97h-.74V15.84c2.1-.47,3.7-2.27,3.7-4.51ZM6,37.21v-15.44c0-.81,.64-1.45,1.45-1.45h.6v18.34h-.6c-.81,0-1.45-.64-1.45-1.45Zm35.55,18.16H15.04c-1.01,0-1.84-.83-1.84-1.84v-9.6h1.29v7.13c0,1.38,1.12,2.51,2.51,2.51h11.13c1.38,0,2.51-1.13,2.51-2.51v-7.13h12.76v9.6c0,1.01-.83,1.84-1.84,1.84Zm-12.92-11.44v7.13c0,.29-.22,.51-.51,.51h-11.13c-.29,0-.51-.22-.51-.51v-7.13h12.15Zm17.91-3.45c0,.8-.65,1.45-1.45,1.45H11.5c-.8,0-1.45-.65-1.45-1.45V18.5c0-.8,.65-1.45,1.45-1.45H45.09c.8,0,1.45,.65,1.45,1.45v21.98Zm4.05-3.27c0,.81-.64,1.45-1.45,1.45h-.6V20.32h.6c.81,0,1.45,.64,1.45,1.45v15.44Zm7.41-9.26v3.08c0,.53-.43,.97-.96,.97h-4.44v-5.02h4.44c.53,0,.96,.44,.96,.97Zm-5.41-16.62c0-1.49,1.21-2.7,2.7-2.7s2.7,1.21,2.7,2.7-1.21,2.71-2.7,2.71-2.7-1.22-2.7-2.71Z" fill="currentColor"/><path d="M39.25,47.61h-4.49c-1.64,0-2.98,1.34-2.98,2.98s1.33,2.98,2.98,2.98h4.49c1.64,0,2.98-1.34,2.98-2.98s-1.33-2.98-2.98-2.98Zm0,3.96h-4.49c-.55,0-.98-.43-.98-.98s.44-.98,.98-.98h4.49c.54,0,.98,.44,.98,.98s-.43,.98-.98,.98Z" fill="currentColor"/><path d="M26.21,50.34c.55,0,1-.45,1-1v-2.62c0-.55-.45-1-1-1s-1,.45-1,1v2.62c0,.55,.45,1,1,1Z" fill="currentColor"/><path d="M33.74,46.6h6.54c.55,0,1-.45,1-1s-.45-1-1-1h-6.54c-.55,0-1,.45-1,1s.45,1,1,1Z" fill="currentColor"/></g><g id="aq"/><g id="ar"/><g id="as"/><g id="at"/><g id="au"/><g id="av"/><g id="aw"/><g id="ax"/></svg>
          }
          label="Lottery"
          isActive={location.pathname === "/"}
          to="/"
        />
        <NavItem
          icon={
            <svg className="w-6 h-6"  version="1.1" viewBox="0 0 512 512"><g id="_x36_71_x2C__Check_x2C__checklist_x2C__list_x2C__task_x2C__todo"><g><path d="M392.995,28.574H118.126v30.655v342.27h238.438h36.431V28.574z     M182.922,74.229c1.442,0,2.979-0.941,3.45-2.165c1.288-2.572-0.658-5.522-3.45-5.522h-7.719c-1.444,0-2.981,0.941-3.452,2.166    c-1.286,2.572,0.658,5.521,3.452,5.521H182.922z M213.765,74.229c1.444,0,2.981-0.941,3.451-2.165    c1.287-2.572-0.658-5.522-3.451-5.522h-7.719c-1.474,0-2.981,0.941-3.483,2.166c-1.254,2.572,0.691,5.521,3.483,5.521H213.765z     M244.578,74.229c1.474,0,2.981-0.941,3.483-2.165c1.286-2.572-0.691-5.522-3.483-5.522h-7.688c-1.476,0-2.981,0.941-3.483,2.166    c-1.286,2.572,0.689,5.521,3.483,5.521H244.578z M275.421,74.229c1.477,0,2.981-0.941,3.483-2.165    c1.286-2.572-0.689-5.522-3.483-5.522h-7.688c-1.474,0-2.979,0.941-3.481,2.166c-1.287,2.572,0.69,5.521,3.481,5.521H275.421z     M306.267,74.229c1.474,0,2.981-0.941,3.483-2.165c1.286-2.572-0.691-5.522-3.483-5.522h-7.72c-1.442,0-2.949,0.941-3.451,2.166    c-1.286,2.572,0.66,5.521,3.451,5.521H306.267z M337.111,74.229c1.443,0,2.98-0.941,3.451-2.165    c1.287-2.572-0.659-5.522-3.451-5.522h-7.719c-1.444,0-2.981,0.941-3.451,2.166c-1.287,2.572,0.657,5.521,3.451,5.521H337.111z     M366.764,74.229c1.441,0,2.979-0.941,3.451-2.165c1.286-2.572-0.66-5.522-3.451-5.522h-6.527c-1.443,0-2.98,0.941-3.452,2.166    c-1.286,2.572,0.659,5.521,3.452,5.521H366.764z M144.357,66.541c-1.444,0-2.981,0.941-3.452,2.166    c-1.286,2.572,0.66,5.521,3.452,5.521h7.719c1.442,0,2.981-0.941,3.452-2.165c1.286-2.572-0.66-5.522-3.452-5.522H144.357z     M176.645,124.308h-28.429v28.429h28.429V124.308z M144.357,116.588h36.148c2.134,0,3.859,1.726,3.859,3.859v36.148    c0,2.133-1.725,3.857-3.859,3.857h-36.148c-2.134,0-3.858-1.725-3.858-3.857v-36.148    C140.499,118.313,142.224,116.588,144.357,116.588z M204.226,134.098c-2.134,0-3.859-1.727-3.859-3.861    c0-2.133,1.725-3.857,3.859-3.857h73.046c2.134,0,3.86,1.725,3.86,3.857c0,2.135-1.727,3.861-3.86,3.861H204.226z     M204.226,150.664c-2.134,0-3.859-1.725-3.859-3.859c0-2.133,1.725-3.859,3.859-3.859h152.872c2.135,0,3.861,1.727,3.861,3.859    c0,2.135-1.727,3.859-3.861,3.859H204.226z M176.645,197.322h-28.429v28.461h28.429V197.322z M144.357,189.635h36.148    c2.134,0,3.859,1.727,3.859,3.83v36.146c0,2.134-1.725,3.86-3.859,3.86h-36.148c-2.134,0-3.858-1.727-3.858-3.86v-36.146    C140.499,191.361,142.224,189.635,144.357,189.635z M204.226,207.113c-2.134,0-3.859-1.726-3.859-3.859    c0-2.102,1.725-3.828,3.859-3.828h73.046c2.134,0,3.86,1.727,3.86,3.828c0,2.134-1.727,3.859-3.86,3.859H204.226z     M204.226,223.682c-2.134,0-3.859-1.728-3.859-3.861c0-2.102,1.725-3.826,3.859-3.826h152.872c2.135,0,3.861,1.725,3.861,3.826    c0,2.134-1.727,3.861-3.861,3.861H204.226z M176.645,270.371h-28.429v28.428h28.429V270.371z M144.357,262.652h36.148    c2.134,0,3.859,1.725,3.859,3.858v36.147c0,2.135-1.725,3.859-3.859,3.859h-36.148c-2.134,0-3.858-1.725-3.858-3.859v-36.147    C140.499,264.377,142.224,262.652,144.357,262.652z M204.226,280.161c-2.134,0-3.859-1.727-3.859-3.86s1.725-3.859,3.859-3.859    h73.046c2.134,0,3.86,1.726,3.86,3.859s-1.727,3.86-3.86,3.86H204.226z M204.226,296.728c-2.134,0-3.859-1.725-3.859-3.858    s1.725-3.86,3.859-3.86h152.872c2.135,0,3.861,1.727,3.861,3.86s-1.727,3.858-3.861,3.858H204.226z M176.645,343.418h-28.429    v28.429h28.429V343.418z M144.357,335.699h36.148c2.134,0,3.859,1.727,3.859,3.858v36.147c0,2.135-1.725,3.859-3.859,3.859    h-36.148c-2.134,0-3.858-1.725-3.858-3.859v-36.147C140.499,337.426,142.224,335.699,144.357,335.699z M204.226,353.208    c-2.134,0-3.859-1.727-3.859-3.858c0-2.135,1.725-3.861,3.859-3.861h73.046c2.134,0,3.86,1.727,3.86,3.861    c0,2.132-1.727,3.858-3.86,3.858H204.226z M204.226,369.774c-2.134,0-3.859-1.725-3.859-3.858s1.725-3.859,3.859-3.859h152.872    c2.135,0,3.861,1.726,3.861,3.859s-1.727,3.858-3.861,3.858H204.226z M97.793,30.237c2.134,0,3.859,1.726,3.859,3.858    c0,2.135-1.725,3.861-3.859,3.861H60.924v89.865c0,2.103-1.756,3.859-3.86,3.859c-2.132,0-3.859-1.757-3.859-3.859V34.096    c0-2.133,1.727-3.858,3.859-3.858H97.793z M41.941,460.958c-2.102,0-3.86-1.725-3.86-3.858s1.758-3.86,3.86-3.86h306.779    c2.135,0,3.859,1.727,3.859,3.86s-1.725,3.858-3.859,3.858H41.941z M221.579,483.426c-2.102,0-3.86-1.758-3.86-3.86    c0-2.134,1.758-3.858,3.86-3.858h212.3c2.134,0,3.86,1.725,3.86,3.858c0,2.103-1.727,3.86-3.86,3.86H221.579z M455.593,483.426    c-2.103,0-3.859-1.758-3.859-3.86c0-2.134,1.757-3.858,3.859-3.858h26.546c2.133,0,3.86,1.725,3.86,3.858    c0,2.103-1.728,3.86-3.86,3.86H455.593z M29.86,482.734c-2.134,0-3.858-1.725-3.858-3.858s1.725-3.86,3.858-3.86h100.598    c2.132,0,3.859,1.727,3.859,3.86s-1.727,3.858-3.859,3.858H29.86z M352.611,409.187H114.267c-2.134,0-3.86-1.728-3.86-3.86V63.183    H77.742v372.894h274.869V409.187z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/></g></g><g id="Layer_1"/></svg>
          }
          label="History"
          isActive={location.pathname === "/history"}
          to="/history"
        />
        <NavItem
          icon={
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
          }
          label="Friends"
          isActive={location.pathname === "/friends"}
          to="/friends"
        />
        <NavItem
          icon={
            <svg className="w-6 h-6" data-name="Your Icons" id="Your_Icons" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><title/><circle cx="36" cy="26" r="1" fill="currentColor"/><path d="M10,21.92V34a4,4,0,0,0,4,4H38a4,4,0,0,0,4-4V18a4,4,0,0,0-4-4H21.93A8,8,0,1,0,8.4,20.72,8.58,8.58,0,0,0,10,21.92Zm2.8,1,.27,0A7.26,7.26,0,0,0,14,23a6.68,6.68,0,0,0,.78,0h.1l.17,0h0l.45-.07.21-.05.15,0h0l.36-.09.33-.11.11,0,.26-.1a3,3,0,0,0,.41-.18l.09,0h0l.17-.08.41-.23.19-.11,0,0c.14-.09.28-.18.41-.28l.17-.13a4.12,4.12,0,0,0,.4-.33l.15-.13c.13-.12.26-.24.38-.37l.12-.13c.12-.13.23-.25.34-.39H35a1,1,0,0,1,1,1v1a4,4,0,0,0,0,8v1a1,1,0,0,1-1,1H12V22.75l.15,0C12.37,22.83,12.58,22.87,12.8,22.9ZM34,26a2,2,0,0,1,2-2h4v4H36A2,2,0,0,1,34,26Zm6,8a2,2,0,0,1-2,2H14a2,2,0,0,1-2-2H35a3,3,0,0,0,3-3V30h2Zm0-16v4H38V21a3,3,0,0,0-3-3H21.41a3.39,3.39,0,0,0,.15-.41,1.15,1.15,0,0,0,.06-.17c0-.12.07-.25.11-.37l.09-.37.06-.34.06-.34H38A2,2,0,0,1,40,18ZM10.27,10.3A5.94,5.94,0,0,1,14,9a6,6,0,0,1,5.91,5A5.47,5.47,0,0,1,20,15a6,6,0,0,1-.83,3,5.07,5.07,0,0,1-.36.54l-.09.12a5.47,5.47,0,0,1-.45.51l0,0a5.87,5.87,0,0,1-.52.46l-.16.12a3.83,3.83,0,0,1-.42.28l-.19.12a5.93,5.93,0,0,1-.56.29l-.06,0c-.22.09-.44.16-.66.23l-.21,0-.52.11-.21,0A6.13,6.13,0,0,1,14,21a6.52,6.52,0,0,1-1.1-.1h0a7.14,7.14,0,0,1-1-.29h0a6.45,6.45,0,0,1-1-.47l0,0a5.69,5.69,0,0,1-.84-.62L9.8,19.3A6,6,0,0,1,8,15,6,6,0,0,1,10.27,10.3Z" fill="currentColor"/><path d="M11.5,16H13v1.5a1,1,0,0,0,2,0V16h1.5a1,1,0,0,0,0-2H15V12.5a1,1,0,0,0-2,0V14H11.5a1,1,0,0,0,0,2Z" fill="currentColor"/></svg>
          }
          label="Wallet"
          isActive={location.pathname === "/connect"}
          to="/connect"
        />
        <NavItem
          icon={
            <svg className="w-6 h-6" id="Layer_1" version="1.1" viewBox="0 0 512 512" fill="currentColor"><g><path d="M345.1,77.1C317.6,56.2,286.6,49,247.3,49c-29.8,0-55.3,6.1-75.5,19.7C142,89,128,123.1,128,177h76.8   c0-14.4-1.4-29.9,7-43.2c8.4-13.3,20.1-23.5,40.2-23.5c20.4,0,30.9,5.9,40.8,18.1c8.4,10.4,11.6,22.8,11.6,36   c0,11.4-5.8,21.9-12.7,31.4c-3.8,5.6-8.8,10.6-15.1,15.4c0,0-41.5,24.7-56.1,48.1c-10.9,17.4-14.8,39.2-15.7,65.3   c-0.1,1.9,0.6,5.8,7.2,5.8c6.5,0,56,0,61.8,0c5.8,0,7-4.4,7.1-6.2c0.4-9.5,1.6-24.1,3.3-29.6c3.3-10.4,9.7-19.5,19.7-27.3   l20.7-14.3c18.7-14.6,33.6-26.5,40.2-35.9c11.3-15.4,19.2-34.4,19.2-56.9C384,123.5,370.5,96.4,345.1,77.1z M242,370.2   c-25.9-0.8-47.3,17.2-48.2,45.3c-0.8,28.2,19.5,46.7,45.5,47.5c27,0.8,47.9-16.6,48.7-44.7C288.8,390.2,269,371,242,370.2z"/></g></svg>
          }
          label="Help"
          isActive={location.pathname === "/how to play"}
          to="/how to play"
        />
      </div>
    </nav>
  );
};

export default NavigationBar;
