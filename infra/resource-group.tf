#
# Creates a resource group for FoodFinder in your Azure account.
#
resource "azurerm_resource_group" "foodfinder" {
  name     = var.app_name
  location = var.location
}
