import { DefaultAzureCredential } from "@azure/identity";
import { CosmosClient } from "@azure/cosmos";

export async function connectDatabase() {
  const endpoint = process.env.COSMOS_ENDPOINT;
  const key = process.env.COSMOS_KEY;

  // Set Database name and container name with unique timestamp
  const databaseName = process.env.DATABASE_NAME;
  const containerName = process.env.CONTAINER_NAME;
  const credentials = new DefaultAzureCredential();

  // Authenticate to Azure Cosmos DB
  const cosmosClient = new CosmosClient({
    endpoint,
    key
  });

  const database = await cosmosClient.database(databaseName);

  const container = await database.container(containerName);

  return container;
}