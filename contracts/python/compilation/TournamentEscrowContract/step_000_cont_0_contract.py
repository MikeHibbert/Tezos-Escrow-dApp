import smartpy as sp

class Contract(sp.Contract):
  def __init__(self):
    self.init_type(sp.TRecord(storedValue = sp.TIntOrNat).layout("storedValue"))
    self.init(storedValue = 1)

  @sp.entry_point
  def store(self, params):
    self.data.storedValue = params

sp.add_compilation_target("test", Contract())