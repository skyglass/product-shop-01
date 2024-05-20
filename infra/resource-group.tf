#
# Creates a resource group for ProductShop in your Azure account.
#
resource "azurerm_resource_group" "productshop" {
  name     = var.app_name
  location = var.location
}
