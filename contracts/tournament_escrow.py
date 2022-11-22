import smartpy as sp

class TournamentEscrowContract(sp.Contract):
  def __init__(self, owner, prize: sp.tez, start, end):
      self.init(
        owner=sp.address(owner),
        start=sp.timestamp(start),
        end=sp.timestamp(end), 
        prize=sp.tez(prize),
        contestants=sp.big_map(l={}, tkey=sp.TString, tvalue=sp.TString), 
        winners=sp.big_map(l={}, tkey=sp.TString, tvalue=sp.TString),
        payouts=sp.big_map(l={}, tkey=sp.sp.TInt, tvalue=sp.tez)
      )

#   @sp.entry_point
#   def payout(self, winners):
#     sp.verify(sp.spender == self.data.owner)

#     for i, contestant in range(0, len(winners)):
#       sp.spend(contestant, self.data.payouts[i].amount)

# @sp.add_test(name = "TournamentEscrowContract")
# def test():
#   scenario = sp.test_scenario()
#   owner = sp.address("tz1-owner-address")
#   someoneElse = sp.address("tz1-someoneElseAddress")

#   contract = TournamentEscrowContract(
#     owner,
#     2000,

#   )
#   scenario += contract
#   contract.store(2)

# # A a compilation target (produces compiled code)
# sp.add_compilation_target("my_contract_compiled", TournamentEscrowContract(1))