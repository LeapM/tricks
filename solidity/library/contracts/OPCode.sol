pragma solidity 0.4.24;

contract OPCode {
    uint256 public extSize;
    uint256 public selfSize;

    constructor() public {
        address addr = address(this);
        uint256 _extSize;
        uint256 _selfSize;
        assembly { 
            _extSize := extcodesize(addr)
            _selfSize := codesize()
        }
        extSize = _extSize;
        selfSize = _selfSize;
    }
    function extCodeSize() public view returns (uint256) {
        uint256 size;
        address addr = address(this);
        assembly { size := extcodesize(addr) }
        return size;
    }

    function codeSize() public pure returns (uint256) {
        uint256 size;
        assembly { size := codesize() }
        return size;
    }
}