"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCorrelationId = generateCorrelationId;
const uuid_1 = require("uuid");
function generateCorrelationId() {
    return (0, uuid_1.v4)();
}
//# sourceMappingURL=correlation-id.util.js.map