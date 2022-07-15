﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.ShopTest
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Склад.
    /// </summary>
    // *** Start programmer edit section *** (StoreHouse CustomAttributes)

    // *** End programmer edit section *** (StoreHouse CustomAttributes)
    [AutoAltered()]
    [Caption("Склад")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("StoreHouseE", new string[] {
            "Number as \'Номер\'",
            "Address as \'Адрес\'",
            "Storekeeper as \'Кладовщик\'",
            "Storekeeper.LastName as \'\'"}, Hidden=new string[] {
            "Storekeeper.LastName"})]
    [AssociatedDetailViewAttribute("StoreHouseE", "StoreProduct", "StoreProductE", true, "", "Список товаров", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("StoreHouseE", "Storekeeper", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "LastName")]
    [View("StoreHouseL", new string[] {
            "Number as \'Номер\'",
            "Address as \'Адрес\'",
            "Storekeeper.LastName as \'Кладовщик\'"})]
    public class StoreHouse : ICSSoft.STORMNET.DataObject
    {
        
        private int fNumber = 1;
        
        private string fAddress;
        
        private IIS.ShopTest.Employee fStorekeeper;
        
        private IIS.ShopTest.DetailArrayOfStoreProduct fStoreProduct;
        
        // *** Start programmer edit section *** (StoreHouse CustomMembers)

        // *** End programmer edit section *** (StoreHouse CustomMembers)

        
        /// <summary>
        /// Number.
        /// </summary>
        // *** Start programmer edit section *** (StoreHouse.Number CustomAttributes)

        // *** End programmer edit section *** (StoreHouse.Number CustomAttributes)
        [NotNull()]
        public virtual int Number
        {
            get
            {
                // *** Start programmer edit section *** (StoreHouse.Number Get start)

                // *** End programmer edit section *** (StoreHouse.Number Get start)
                int result = this.fNumber;
                // *** Start programmer edit section *** (StoreHouse.Number Get end)

                // *** End programmer edit section *** (StoreHouse.Number Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (StoreHouse.Number Set start)

                // *** End programmer edit section *** (StoreHouse.Number Set start)
                this.fNumber = value;
                // *** Start programmer edit section *** (StoreHouse.Number Set end)

                // *** End programmer edit section *** (StoreHouse.Number Set end)
            }
        }
        
        /// <summary>
        /// Address.
        /// </summary>
        // *** Start programmer edit section *** (StoreHouse.Address CustomAttributes)

        // *** End programmer edit section *** (StoreHouse.Address CustomAttributes)
        [StrLen(255)]
        public virtual string Address
        {
            get
            {
                // *** Start programmer edit section *** (StoreHouse.Address Get start)

                // *** End programmer edit section *** (StoreHouse.Address Get start)
                string result = this.fAddress;
                // *** Start programmer edit section *** (StoreHouse.Address Get end)

                // *** End programmer edit section *** (StoreHouse.Address Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (StoreHouse.Address Set start)

                // *** End programmer edit section *** (StoreHouse.Address Set start)
                this.fAddress = value;
                // *** Start programmer edit section *** (StoreHouse.Address Set end)

                // *** End programmer edit section *** (StoreHouse.Address Set end)
            }
        }
        
        /// <summary>
        /// Склад.
        /// </summary>
        // *** Start programmer edit section *** (StoreHouse.Storekeeper CustomAttributes)

        // *** End programmer edit section *** (StoreHouse.Storekeeper CustomAttributes)
        [PropertyStorage(new string[] {
                "Storekeeper"})]
        public virtual IIS.ShopTest.Employee Storekeeper
        {
            get
            {
                // *** Start programmer edit section *** (StoreHouse.Storekeeper Get start)

                // *** End programmer edit section *** (StoreHouse.Storekeeper Get start)
                IIS.ShopTest.Employee result = this.fStorekeeper;
                // *** Start programmer edit section *** (StoreHouse.Storekeeper Get end)

                // *** End programmer edit section *** (StoreHouse.Storekeeper Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (StoreHouse.Storekeeper Set start)

                // *** End programmer edit section *** (StoreHouse.Storekeeper Set start)
                this.fStorekeeper = value;
                // *** Start programmer edit section *** (StoreHouse.Storekeeper Set end)

                // *** End programmer edit section *** (StoreHouse.Storekeeper Set end)
            }
        }
        
        /// <summary>
        /// Склад.
        /// </summary>
        // *** Start programmer edit section *** (StoreHouse.StoreProduct CustomAttributes)

        // *** End programmer edit section *** (StoreHouse.StoreProduct CustomAttributes)
        public virtual IIS.ShopTest.DetailArrayOfStoreProduct StoreProduct
        {
            get
            {
                // *** Start programmer edit section *** (StoreHouse.StoreProduct Get start)

                // *** End programmer edit section *** (StoreHouse.StoreProduct Get start)
                if ((this.fStoreProduct == null))
                {
                    this.fStoreProduct = new IIS.ShopTest.DetailArrayOfStoreProduct(this);
                }
                IIS.ShopTest.DetailArrayOfStoreProduct result = this.fStoreProduct;
                // *** Start programmer edit section *** (StoreHouse.StoreProduct Get end)

                // *** End programmer edit section *** (StoreHouse.StoreProduct Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (StoreHouse.StoreProduct Set start)

                // *** End programmer edit section *** (StoreHouse.StoreProduct Set start)
                this.fStoreProduct = value;
                // *** Start programmer edit section *** (StoreHouse.StoreProduct Set end)

                // *** End programmer edit section *** (StoreHouse.StoreProduct Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "StoreHouseE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View StoreHouseE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("StoreHouseE", typeof(IIS.ShopTest.StoreHouse));
                }
            }
            
            /// <summary>
            /// "StoreHouseL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View StoreHouseL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("StoreHouseL", typeof(IIS.ShopTest.StoreHouse));
                }
            }
        }
    }
}
