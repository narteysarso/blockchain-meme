const Meme = artifacts.require("Meme");

// require('chai')
// .use(require('chai-as-promised'))
// .should();

contract('Meme', (accounts) => {
    //test;
    let meme; 
    beforeEach( async () => {
        meme = await Meme.deployed();
    });
    describe('deploy', () => {
        
        it('should deploy successfully', async () => {
            //
            expect(meme.address).to.not.equal("")
        });
    })

    describe('store', () => {
        it('should store a value at the address of the sender', async() => {
            
            const result = await meme.store("125666");
            expect(result).to.be.an('object');
            expect(result).to.have.property('tx');
        });

    })

    describe('retrieve', () => {
        it('should retrieve a value stored at an index', async () => {
            const meme = await Meme.deployed();
            const result = await meme.retrieve("0x8b062fd8ad835204a498c4f6609d0ba75b30968e", 0);
            expect(result).to.be.equal("125666")
        })
    })
})