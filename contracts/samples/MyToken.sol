import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract MyToken is ERC20 {

    constructor() ERC20("My", "TEST") {}

    function mint(address who, uint amount) public {
        _mint(who, amount);
    }

}
