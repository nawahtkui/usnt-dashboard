// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NawahToken is ERC20, Ownable {
    constructor() ERC20("Nawah Token", "NWTK") {
        // إصدار إجمالي العرض الأولي
        _mint(msg.sender, 100_000_000 * 10 ** decimals());
    }

    // حرق التوكنات من محفظة المستخدم
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }

    // إصدار توكنات جديدة (Mint) للمالك فقط
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
