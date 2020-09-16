/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
import { __assign } from 'tslib';
import * as msRest from '@azure/ms-rest-js';
import * as Mappers from '../models/botConnectionMappers';
import * as Parameters from '../models/parameters';
/** Class representing a BotConnection. */
var BotConnection = /** @class */ (function () {
  /**
   * Create a BotConnection.
   * @param {AzureBotServiceContext} client Reference to the service client.
   */
  function BotConnection(client) {
    this.client = client;
  }
  BotConnection.prototype.listServiceProviders = function (options, callback) {
    return this.client.sendOperationRequest(
      {
        options: options,
      },
      listServiceProvidersOperationSpec,
      callback
    );
  };
  BotConnection.prototype.listWithSecrets = function (
    resourceGroupName,
    resourceName,
    connectionName,
    options,
    callback
  ) {
    return this.client.sendOperationRequest(
      {
        resourceGroupName: resourceGroupName,
        resourceName: resourceName,
        connectionName: connectionName,
        options: options,
      },
      listWithSecretsOperationSpec,
      callback
    );
  };
  BotConnection.prototype.create = function (
    resourceGroupName,
    resourceName,
    connectionName,
    parameters,
    options,
    callback
  ) {
    return this.client.sendOperationRequest(
      {
        resourceGroupName: resourceGroupName,
        resourceName: resourceName,
        connectionName: connectionName,
        parameters: parameters,
        options: options,
      },
      createOperationSpec,
      callback
    );
  };
  BotConnection.prototype.update = function (
    resourceGroupName,
    resourceName,
    connectionName,
    parameters,
    options,
    callback
  ) {
    return this.client.sendOperationRequest(
      {
        resourceGroupName: resourceGroupName,
        resourceName: resourceName,
        connectionName: connectionName,
        parameters: parameters,
        options: options,
      },
      updateOperationSpec,
      callback
    );
  };
  BotConnection.prototype.get = function (resourceGroupName, resourceName, connectionName, options, callback) {
    return this.client.sendOperationRequest(
      {
        resourceGroupName: resourceGroupName,
        resourceName: resourceName,
        connectionName: connectionName,
        options: options,
      },
      getOperationSpec,
      callback
    );
  };
  BotConnection.prototype.deleteMethod = function (resourceGroupName, resourceName, connectionName, options, callback) {
    return this.client.sendOperationRequest(
      {
        resourceGroupName: resourceGroupName,
        resourceName: resourceName,
        connectionName: connectionName,
        options: options,
      },
      deleteMethodOperationSpec,
      callback
    );
  };
  BotConnection.prototype.listByBotService = function (resourceGroupName, resourceName, options, callback) {
    return this.client.sendOperationRequest(
      {
        resourceGroupName: resourceGroupName,
        resourceName: resourceName,
        options: options,
      },
      listByBotServiceOperationSpec,
      callback
    );
  };
  BotConnection.prototype.listByBotServiceNext = function (nextPageLink, options, callback) {
    return this.client.sendOperationRequest(
      {
        nextPageLink: nextPageLink,
        options: options,
      },
      listByBotServiceNextOperationSpec,
      callback
    );
  };
  return BotConnection;
})();
export { BotConnection };
// Operation Specifications
var serializer = new msRest.Serializer(Mappers);
var listServiceProvidersOperationSpec = {
  httpMethod: 'POST',
  path: 'subscriptions/{subscriptionId}/providers/Microsoft.BotService/listAuthServiceProviders',
  urlParameters: [Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.ServiceProviderResponseList,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  serializer: serializer,
};
var listWithSecretsOperationSpec = {
  httpMethod: 'POST',
  path:
    'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/Connections/{connectionName}/listWithSecrets',
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.connectionName,
    Parameters.subscriptionId,
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionSetting,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  serializer: serializer,
};
var createOperationSpec = {
  httpMethod: 'PUT',
  path:
    'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/Connections/{connectionName}',
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.connectionName,
    Parameters.subscriptionId,
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  requestBody: {
    parameterPath: 'parameters',
    mapper: __assign(__assign({}, Mappers.ConnectionSetting), { required: true }),
  },
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionSetting,
    },
    201: {
      bodyMapper: Mappers.ConnectionSetting,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  serializer: serializer,
};
var updateOperationSpec = {
  httpMethod: 'PATCH',
  path:
    'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/Connections/{connectionName}',
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.connectionName,
    Parameters.subscriptionId,
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  requestBody: {
    parameterPath: 'parameters',
    mapper: __assign(__assign({}, Mappers.ConnectionSetting), { required: true }),
  },
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionSetting,
    },
    201: {
      bodyMapper: Mappers.ConnectionSetting,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  serializer: serializer,
};
var getOperationSpec = {
  httpMethod: 'GET',
  path:
    'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/Connections/{connectionName}',
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.connectionName,
    Parameters.subscriptionId,
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionSetting,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  serializer: serializer,
};
var deleteMethodOperationSpec = {
  httpMethod: 'DELETE',
  path:
    'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/Connections/{connectionName}',
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.connectionName,
    Parameters.subscriptionId,
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  serializer: serializer,
};
var listByBotServiceOperationSpec = {
  httpMethod: 'GET',
  path:
    'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/connections',
  urlParameters: [Parameters.resourceGroupName, Parameters.resourceName, Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionSettingResponseList,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  serializer: serializer,
};
var listByBotServiceNextOperationSpec = {
  httpMethod: 'GET',
  baseUrl: 'https://management.azure.com',
  path: '{nextLink}',
  urlParameters: [Parameters.nextPageLink],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionSettingResponseList,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  serializer: serializer,
};
//# sourceMappingURL=botConnection.js.map
