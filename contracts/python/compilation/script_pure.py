import smartpy as sp

class TournamentEscrowContract(sp.Contract):
  def __init__(self, value):
      self.init(storedValue = value)

  @sp.entry_point
  def store(self, value):
    # Store a new value
    self.data.storedValue = value

@sp.add_test(name = "TournamentEscrowContract")
def test():
  scenario = sp.test_scenario()
  contract = TournamentEscrowContract(1)
  scenario += contract
  contract.store(2)

# A a compilation target (produces compiled code)
sp.add_compilation_target("my_contract_compiled", TournamentEscrowContract(1))
