const DropDownItem = ({ inTxt, btnTxt, inFct, btnFct }) => {
  return (
    <li className="dropdownItem">
      <input
        placeholder={inTxt}
        onChange={(event) => {
          inFct(event.target.value);
        }}
      />
      <button
        onClick={() => {
          btnFct();
        }}
      >
        {btnTxt}
      </button>
    </li>
  );
};

export default DropDownItem;
