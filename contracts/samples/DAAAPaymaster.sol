// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

/* solhint-disable reason-string */

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../core/BasePaymaster.sol";

/**
 *   Paymaster which pays for txs if the user has a token balance. For example it can represent participation in a DAO.
 */
contract DAAAPaymaster is BasePaymaster {
    ERC20 public token;
    uint public threshold;

    constructor(address tokenAddress, IEntryPoint _entryPoint) BasePaymaster(_entryPoint) {
        token = ERC20(tokenAddress);
        threshold = 0;
    }

    /**
      * validate the request:
      * if this is a constructor call, make sure it is a known account.
      * verify the sender has enough tokens.
      * (since the paymaster is also the token, there is no notion of "approval")
      */
    function _validatePaymasterUserOp(UserOperation calldata userOp, bytes32 /*userOpHash*/, uint256 requiredPreFund)
    internal view override returns (bytes memory context, uint256 validationData) {

        if (userOp.initCode.length != 0) {
            // _validateConstructor(userOp);
            require(token.balanceOf(userOp.sender) >= threshold, "TokenPaymaster: no balance (pre-create)");
        } else {
            require(token.balanceOf(userOp.sender) >= threshold, "TokenPaymaster: no balance");
        }

        return (abi.encode(userOp.sender), 0);
    }

    // // when constructing an account, validate constructor code and parameters
    // // we trust our factory (and that it doesn't have any other public methods)
    // function _validateConstructor(UserOperation calldata userOp) internal virtual view {
    //     address factory = address(bytes20(userOp.initCode[0 : 20]));
    //     require(factory == theFactory, "TokenPaymaster: wrong account factory");
    // }

    /**
     * actual charge of user.
     * this method will be called just after the user's TX with mode==OpSucceeded|OpReverted (account pays in both cases)
     * BUT: if the user changed its balance in a way that will cause  postOp to revert, then it gets called again, after reverting
     * the user's TX , back to the state it was before the transaction started (before the validatePaymasterUserOp),
     * and the transaction should succeed there.
     */
    function _postOp(PostOpMode mode, bytes calldata context, uint256 actualGasCost) internal override {
    //     //we don't really care about the mode, we just pay the gas with the user's tokens.
    //     (mode);
    //     address sender = abi.decode(context, (address));
    //     uint256 charge = getTokenValueOfEth(actualGasCost + COST_OF_POST);
    //     //actualGasCost is known to be no larger than the above requiredPreFund, so the transfer should succeed.
    //     _transfer(sender, address(this), charge);
    }
}
