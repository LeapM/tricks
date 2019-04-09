var Instance = artifacts.require("../contracts/OPCode");

contract('contract_main_test', function (accounts) {
    console.log('start testing...')
    it("test 1", async function () {
        var instance = await Instance.new();
        let exSize = await instance.extCodeSize()
        let size = await instance.codeSize()
        console.log(
            'constructor ext',
            (await instance.extSize()).toString(),
            'constructor int',
            (await instance.selfSize()).toString())
        console.log('ext', exSize.toString(), 'int', size.toString())
    });
});