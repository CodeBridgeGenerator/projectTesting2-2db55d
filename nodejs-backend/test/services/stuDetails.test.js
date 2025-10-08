const assert = require("assert");
const app = require("../../src/app");

describe("stuDetails service", () => {
  let thisService;
  let stuDetailCreated;

  beforeEach(async () => {
    thisService = await app.service("stuDetails");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (stuDetails)");
  });

  describe("#create", () => {
    const options = {"name":"new value","image":"new value","address":"new value"};

    beforeEach(async () => {
      stuDetailCreated = await thisService.create(options);
    });

    it("should create a new stuDetail", () => {
      assert.strictEqual(stuDetailCreated.name, options.name);
assert.strictEqual(stuDetailCreated.image, options.image);
assert.strictEqual(stuDetailCreated.address, options.address);
    });
  });

  describe("#get", () => {
    it("should retrieve a stuDetail by ID", async () => {
      const retrieved = await thisService.get(stuDetailCreated._id);
      assert.strictEqual(retrieved._id, stuDetailCreated._id);
    });
  });

  describe("#update", () => {
    let stuDetailUpdated;
    const options = {"name":"updated value","image":"updated value","address":"updated value"};

    beforeEach(async () => {
      stuDetailUpdated = await thisService.update(stuDetailCreated._id, options);
    });

    it("should update an existing stuDetail ", async () => {
      assert.strictEqual(stuDetailUpdated.name, options.name);
assert.strictEqual(stuDetailUpdated.image, options.image);
assert.strictEqual(stuDetailUpdated.address, options.address);
    });
  });

  describe("#delete", () => {
  let stuDetailDeleted;
    beforeEach(async () => {
      stuDetailDeleted = await thisService.remove(stuDetailCreated._id);
    });

    it("should delete a stuDetail", async () => {
      assert.strictEqual(stuDetailDeleted._id, stuDetailCreated._id);
    });
  });
});