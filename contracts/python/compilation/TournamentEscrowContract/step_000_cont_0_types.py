import smartpy as sp

tstorage = sp.TRecord(storedValue = sp.TIntOrNat).layout("storedValue")
tparameter = sp.TVariant(store = sp.TIntOrNat).layout("store")
tprivates = { }
tviews = { }
