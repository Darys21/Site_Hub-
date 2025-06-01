# Script pour créer la structure de dossiers du projet

# Dossiers principaux
$folders = @(
    # Auth
    "src/app/(auth)/login",
    "src/app/(auth)/register",
    "src/app/(auth)/forgot-password",
    
    # Dashboard Vendeur
    "src/app/(dashboard)/seller/products",
    "src/app/(dashboard)/seller/orders",
    "src/app/(dashboard)/seller/settings",
    "src/app/(dashboard)/seller/analytics",
    
    # Dashboard Admin
    "src/app/(dashboard)/admin/users",
    "src/app/(dashboard)/admin/stores",
    "src/app/(dashboard)/admin/settings",
    "src/app/(dashboard)/admin/analytics",
    
    # Storefront Public
    "src/app/(store)/[storeSlug]/products",
    "src/app/(store)/[storeSlug]/cart",
    "src/app/(store)/[storeSlug]/checkout",
    "src/app/(store)/[storeSlug]/order-confirmation",
    
    # Marketing
    "src/app/(marketing)/about",
    "src/app/(marketing)/contact",
    "src/app/(marketing)/pricing",
    
    # Composants
    "src/components/ui",
    "src/components/auth",
    "src/components/dashboard",
    "src/components/storefront",
    "src/components/forms",
    "src/components/layout",
    
    # Utilitaires
    "src/lib/utils",
    "src/lib/constants",
    "src/lib/supabase",
    "src/lib/api",
    "src/lib/validations",
    
    # Assets
    "src/assets/images",
    "src/assets/icons",
    "src/assets/fonts",
    "src/assets/styles",
    
    # Autres dossiers utiles
    "src/hooks",
    "src/types",
    "src/contexts",
    "src/config"
)

# Création des dossiers
foreach ($folder in $folders) {
    $path = Join-Path -Path $PSScriptRoot -ChildPath $folder
    if (-not (Test-Path -Path $path)) {
        New-Item -ItemType Directory -Path $path -Force | Out-Null
        Write-Host "Créé: $folder" -ForegroundColor Green
    } else {
        Write-Host "Existe déjà: $folder" -ForegroundColor Yellow
    }
}

Write-Host "\nStructure de dossiers créée avec succès!" -ForegroundColor Cyan
