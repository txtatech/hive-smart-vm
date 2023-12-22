const https = require('https');

function fetchHiveData() {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'api.hive.blog',
            port: 443,
            path: '/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const response = JSON.parse(data);
                    if (response.result) {
                        resolve(response.result);
                    } else {
                        reject("Result not found in response");
                    }
                } catch (error) {
                    reject(error);
                }
            });
        });

        req.on('error', (e) => {
            reject(e);
        });

        // Adjusted JSON-RPC request payload
        const payload = JSON.stringify({
            jsonrpc: "2.0",
            method: "condenser_api.get_dynamic_global_properties",
            params: [],
            id: 1
        });

        req.write(payload);
        req.end();
    });
}

function headBlockNumber(hiveData) {
    return `The great library records the current era as ${hiveData.head_block_number}`;
}

function headBlockId(hiveData) {
    return `The ancient relic's code is '${hiveData.head_block_id}'`;
}

function currentTime(hiveData) {
    return `The town clock shows ${hiveData.time}`;
}

function currentWitness(hiveData) {
    return `The current ruler of the land is ${hiveData.current_witness}`;
}

function totalPower(hiveData) {
    return `The kingdom's total power is at ${hiveData.total_pow}`;
}

function numPowWitnesses(hiveData) {
    return `There are ${hiveData.num_pow_witnesses} powerful mages in the realm`;
}

function virtualSupply(hiveData) {
    return `The kingdom's treasury contains ${hiveData.virtual_supply} gold coins`;
}

function currentSupply(hiveData) {
    return `The current supply in the market is ${hiveData.current_supply} goods`;
}

function initHbdSupply(hiveData) {
    return `The initial supply of healing potions is ${hiveData.init_hbd_supply}`;
}

function currentHbdSupply(hiveData) {
    return `The current supply of healing potions is ${hiveData.current_hbd_supply}`;
}

function totalVestingFundHive(hiveData) {
    return `The total vested funds of the kingdom are ${hiveData.total_vesting_fund_hive}`;
}

function totalVestingShares(hiveData) {
    return `The kingdom's total shares are ${hiveData.total_vesting_shares}`;
}

function totalRewardFundHive(hiveData) {
    return `The kingdom's reward fund currently stands at ${hiveData.total_reward_fund_hive}`;
}

function totalRewardShares2(hiveData) {
    return `Total reward shares in the kingdom: ${hiveData.total_reward_shares2}`;
}

function pendingRewardedVestingShares(hiveData) {
    return `Pending vested shares for heroes: ${hiveData.pending_rewarded_vesting_shares}`;
}

function pendingRewardedVestingHive(hiveData) {
    return `Pending vested gold for heroes: ${hiveData.pending_rewarded_vesting_hive}`;
}

function hbdInterestRate(hiveData) {
    return `The interest rate for savings is ${hiveData.hbd_interest_rate / 100}%`;
}

function hbdPrintRate(hiveData) {
    return `The kingdom's printing rate for currency is ${hiveData.hbd_print_rate / 100}%`;
}

function maximumBlockSize(hiveData) {
    return `The largest stone block in the castle measures ${hiveData.maximum_block_size} units`;
}

function currentAslot(hiveData) {
    return `The current prophecy foretells slot number ${hiveData.current_aslot}`;
}

function recentSlotsFilled(hiveData) {
    return `Recent filled slots in the great hall: ${hiveData.recent_slots_filled}`;
}

function participationCount(hiveData) {
    return `The number of participants in the last festival was ${hiveData.participation_count}`;
}

function lastIrreversibleBlockNum(hiveData) {
    return `The last irreversible decree was issued at block ${hiveData.last_irreversible_block_num}`;
}

function votePowerReserveRate(hiveData) {
    return `The reserve rate for voting power in the council is ${hiveData.vote_power_reserve_rate}`;
}

function delegationReturnPeriod(hiveData) {
    return `Heroes must wait ${hiveData.delegation_return_period / 3600} hours to regain their delegated powers`;
}

function reverseAuctionSeconds(hiveData) {
    return `The reverse auction will last for ${hiveData.reverse_auction_seconds} seconds`;
}

function availableAccountSubsidies(hiveData) {
    return `Available subsidies for new traders: ${hiveData.available_account_subsidies}`;
}

function hbdStopPercent(hiveData) {
    return `The stop percentage for trade is ${hiveData.hbd_stop_percent / 100}%`;
}

function hbdStartPercent(hiveData) {
    return `The start percentage for trade is ${hiveData.hbd_start_percent / 100}%`;
}

function nextMaintenanceTime(hiveData) {
    return `The next kingdom maintenance is scheduled for ${hiveData.next_maintenance_time}`;
}

function lastBudgetTime(hiveData) {
    return `The last budget was announced at ${hiveData.last_budget_time}`;
}

function nextDailyMaintenanceTime(hiveData) {
    return `The next daily maintenance of the great library is at ${hiveData.next_daily_maintenance_time}`;
}

function contentRewardPercent(hiveData) {
    return `The reward percent for content creators is ${hiveData.content_reward_percent / 100}%`;
}

function vestingRewardPercent(hiveData) {
    return `The reward percent for vesting is ${hiveData.vesting_reward_percent / 100}%`;
}

function proposalFundPercent(hiveData) {
    return `The proposal fund allocation is ${hiveData.proposal_fund_percent / 100}%`;
}

function dhfIntervalLedger(hiveData) {
    return `The interval ledger for the DHF shows ${hiveData.dhf_interval_ledger}`;
}

function downvotePoolPercent(hiveData) {
    return `The downvote pool's capacity is ${hiveData.downvote_pool_percent / 100}%`;
}

function currentRemoveThreshold(hiveData) {
    return `The current threshold for removal is ${hiveData.current_remove_threshold} points`;
}

function earlyVotingSeconds(hiveData) {
    return `Early voting period lasts for ${hiveData.early_voting_seconds / 3600} hours`;
}

function midVotingSeconds(hiveData) {
    return `Mid-term voting period lasts for ${hiveData.mid_voting_seconds / 3600} hours`;
}

function maxConsecutiveRecurrentTransferFailures(hiveData) {
    return `Max consecutive transfer failures allowed: ${hiveData.max_consecutive_recurrent_transfer_failures}`;
}

function maxRecurrentTransferEndDate(hiveData) {
    return `Max recurrent transfer end date is ${hiveData.max_recurrent_transfer_end_date} days from now`;
}

function minRecurrentTransfersRecurrence(hiveData) {
    return `Minimum recurrence for transfers is ${hiveData.min_recurrent_transfers_recurrence} hours`;
}

function maxOpenRecurrentTransfers(hiveData) {
    return `Maximum open recurrent transfers allowed: ${hiveData.max_open_recurrent_transfers}`;
}

async function runGameEngine() {
    try {
        const hiveData = await fetchHiveData();

        if (hiveData) {
            console.log(headBlockNumber(hiveData));
            console.log(headBlockId(hiveData));
            console.log(currentTime(hiveData));
            console.log(currentWitness(hiveData));
            console.log(totalPower(hiveData));
            console.log(numPowWitnesses(hiveData));
            console.log(virtualSupply(hiveData));
            console.log(currentSupply(hiveData));
            console.log(initHbdSupply(hiveData));
            console.log(currentHbdSupply(hiveData));
            console.log(totalVestingFundHive(hiveData));
            console.log(totalVestingShares(hiveData));
            console.log(totalRewardFundHive(hiveData));
            console.log(totalRewardShares2(hiveData));
            console.log(pendingRewardedVestingShares(hiveData));
            console.log(pendingRewardedVestingHive(hiveData));
            console.log(hbdInterestRate(hiveData));
            console.log(hbdPrintRate(hiveData));
            console.log(maximumBlockSize(hiveData));
            console.log(currentAslot(hiveData));
            console.log(recentSlotsFilled(hiveData));
            console.log(participationCount(hiveData));
            console.log(lastIrreversibleBlockNum(hiveData));
            console.log(votePowerReserveRate(hiveData));
            console.log(delegationReturnPeriod(hiveData));
            console.log(reverseAuctionSeconds(hiveData));
            console.log(availableAccountSubsidies(hiveData));
            console.log(hbdStopPercent(hiveData));
            console.log(hbdStartPercent(hiveData));
            console.log(nextMaintenanceTime(hiveData));
            console.log(lastBudgetTime(hiveData));
            console.log(nextDailyMaintenanceTime(hiveData));
            console.log(contentRewardPercent(hiveData));
            console.log(vestingRewardPercent(hiveData));
            console.log(proposalFundPercent(hiveData));
            console.log(dhfIntervalLedger(hiveData));
            console.log(downvotePoolPercent(hiveData));
            console.log(currentRemoveThreshold(hiveData));
            console.log(earlyVotingSeconds(hiveData));
            console.log(midVotingSeconds(hiveData));
            console.log(maxConsecutiveRecurrentTransferFailures(hiveData));
            console.log(maxRecurrentTransferEndDate(hiveData));
            console.log(minRecurrentTransfersRecurrence(hiveData));
            console.log(maxOpenRecurrentTransfers(hiveData));
        } else {
            console.log('Failed to fetch Hive data.');
        }
    } catch (error) {
        console.error('Error fetching Hive data:', error);
    }
}

runGameEngine();
