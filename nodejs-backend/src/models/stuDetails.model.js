
    module.exports = function (app) {
        const modelName = "stu_details";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            name: { type:  String , comment: "Name, p, false, true, true, true, true, true, true, , , , ," },
image: { type:  [Schema.Types.ObjectId], ref: "document_storages" , comment: "Image, file_upload, false, true, true, true, true, true, true, , , , ," },
address: { type:  String , comment: "Address, p, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };