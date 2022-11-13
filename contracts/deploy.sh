#!/bin/bash

~/smartpy-cli/SmartPy.sh test tournament_escrow.py compilation/
~/smartpy-cli/SmartPy.sh originate-contract --code compilation/my_contract_compiled/step_000_cont_0_contract.tz --storage compilation/my_contract_compiled/step_000_cont_0_storage.tz --rpc https://ghostnet.smartpy.io --private-key edskS5muv18PcNGJ9RsqjXbQbscEXygvhG5MkcEwriThc9Ut2QjSBUUoS7yTMvetXDy5pHV7kaGTjusZsTYC7bvP8TJcUqQYnu
